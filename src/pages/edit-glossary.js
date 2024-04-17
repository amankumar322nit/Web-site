import Container from "@/components/common/Container";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useRef, useMemo } from "react";
import Button from "@/components/hoc/Button";
import validator from "validator";
import Editor from "@/components/richTextEditor/Editor";

const formFields = [
  {
    label: "Title",
    placeholder: "Ad Format",
    id: "title",
    Component: Input,
    required: true,
  },
  {
    label: "Description",
    placeholder: "A small description about the Term",
    id: "description",
    Component: Textarea,
    required: true,
  },
  {
    label: "Slug",
    placeholder: "ad-format",
    id: "slug",
    Component: Input,
    required: true,
  },
];

const EditGlossary = () => {
  const [guideInput, setGuideInput] = useState({});
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({});
  const quillRef = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["code"],
          ["link", "video"],
          ["clean"],
        ],
      },
    }),
    []
  );

  const handlePublish = () => {
    const errors = {};
    formFields.forEach(({ id }) => {
      const input = guideInput[id]?.toString() || "";
      if (id === "title" || id === "description") {
        if (validator.isEmpty(input)) {
          errors[id] = "This field cannot be empty";
        }
      } else if (id === "slug") {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input)) {
          errors["slug"] = "Please enter a valid slug";
        }
        if (validator.isEmpty(input)) {
          errors[id] = "Slug is required";
        }
      }
    });

    if (Object.keys(errors).length) {
      return setErrors(errors);
    }

    setErrors(errors);
    let glossary = JSON.parse(localStorage.getItem("glossary") || "[]");
    glossary.push({ ...guideInput, content: value });
    localStorage.setItem("glossary", JSON.stringify(glossary));
    window.location.href = "/glossary";
  };

  // temporarily not rendering anything
  return <></>;

  return (
    <Box as="main">
      <Container>
        <Heading fontSize="32px" paddingY="20px" textAlign="center">
          Create Glossary
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          {formFields.map(({ id, label, placeholder, Component, required }) => (
            <GridItem key={id}>
              <FormControl
                isInvalid={Boolean(errors[id])}
                isRequired={required}
              >
                <FormLabel>{label}</FormLabel>
                <Component
                  variant="filled"
                  placeholder={placeholder}
                  onChange={(e) => {
                    setGuideInput((prevData) => ({
                      ...prevData,
                      [id]: e.target.value,
                    }));
                  }}
                />
                <FormErrorMessage>{errors[id]}</FormErrorMessage>
              </FormControl>
            </GridItem>
          ))}
        </Grid>
        <Box marginY="20px">
          <Heading fontSize="24px" paddingY="20px">
            Glossary Content
          </Heading>
          <Editor
            value={value}
            onChange={setValue}
            modules={modules}
            quillRef={quillRef}
          />
          <Button sx={{ marginTop: "60px" }} onClick={handlePublish}>
            Publish
          </Button>
          <Button
            sx={{
              marginTop: "60px",
              marginLeft: "20px",
              backgroundColor: "red",
              _hover: { color: "#fff" },
            }}
          >
            Delete
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EditGlossary;
