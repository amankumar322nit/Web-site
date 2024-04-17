import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(
  async () => {
    const ReactQuill = (await import("react-quill")).default;

    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...rest }) => (
      <ReactQuill ref={forwardedRef} {...rest} />
    );
  },
  {
    ssr: false,
  }
);

const Editor = ({ quillRef, value, onChange, modules, style = {} }) => {
  return (
    <ReactQuill
      theme="snow"
      style={{ height: "600px", ...style }}
      forwardedRef={quillRef}
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
};

export default Editor;
