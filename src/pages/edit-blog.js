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
    label: "Blog Title",
    placeholder: "My Blog",
    id: "title",
    Component: Input,
    required: true,
  },
  {
    label: "Description",
    placeholder: "A small description about the blog",
    id: "description",
    Component: Textarea,
    required: true,
  },
  {
    label: "Slug",
    placeholder: "my-blog",
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

const EditBlog = () => {
  const [blogInput, setBlogInput] = useState({});
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
      const input = blogInput[id]?.toString() || "";
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
    let blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    blogs.push({ ...blogInput, content: value });
    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.href = "/blog";
  };

  // temporarily not rendering anything
  return <></>;

  return (
    <Box as="main">
      <Container>
        <Heading fontSize="32px" paddingY="20px" textAlign="center">
          Edit Blog
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
                    setBlogInput((prevData) => ({
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
            Blog Content
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

export default EditBlog;
