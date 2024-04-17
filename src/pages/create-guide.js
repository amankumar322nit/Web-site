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
    label: "Guide Title",
    placeholder: "My Guide",
    id: "title",
    Component: Input,
    required: true,
  },
  {
    label: "Description",
    placeholder: "A small description about the Guide",
    id: "description",
    Component: Textarea,
    required: true,
  },
  {
    label: "Slug",
    placeholder: "my-guide",
    id: "slug",
    Component: Input,
    required: true,
  },
  {
    label: "Feature Image",
    placeholder: "URL of the image",
    id: "feature-image",
    Component: Input,
    required: true,
  },
];

const CreateGuide = () => {
  const [guideInput, setGuideInput] = useState({});
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({});
  const quillRef = useRef(null);

  function imageHandler() {
    if (!quillRef.current) return;

    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const value = prompt("Please enter the image URL");

    if (value && range) {
      editor.insertEmbed(range.index, "image", value, "user");
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["code"],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
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
      } else if (id === "feature-image") {
        if (!validator.isURL(input)) {
          errors[id] = "Invalid URL";
        }
        if (validator.isEmpty(input)) {
          errors[id] = "This field is required";
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
    let guides = JSON.parse(localStorage.getItem("guides") || "[]");
    guides.push({ ...guideInput, content: value });
    localStorage.setItem("guides", JSON.stringify(guides));
    window.location.href = "/guides";
  };

  // temporarily not rendering anything
  return <></>;

  return (
    <Box as="main">
      <Container>
        <Heading fontSize="32px" paddingY="20px" textAlign="center">
          Create Guide
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
            Guide Content
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
        </Box>
      </Container>
    </Box>
  );
};

export default CreateGuide;
