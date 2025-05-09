import Editor from "./components/Editor"
import { init_markdown } from "./config"
import Navbar from "./components/Navbar"
import html2pdf from 'html2pdf.js';
import { useRef } from "react";
import { type MDXEditorMethods } from "@mdxeditor/editor";

export default function App() {

    const editor = useRef<MDXEditorMethods>(null);
    const box = useRef<HTMLElement>(null);

    const copyToClipboard = async () => {
        if (!editor.current) return;
      
        const text = editor.current.getMarkdown();
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {
          console.error('Error al copiar', err);
        }
      };

    const downloadPDF = () => {
        if(!box.current) return;
        const opt = {
            margin:       0,
            filename:     `${(new Date()).toLocaleDateString()}_notes.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(box.current!).save();      
    }

    const downloadMarkdown = () => {
        if(!editor.current) return;
        const content = new Blob([editor.current.getMarkdown()], {type: 'text/plain'});
        const url = URL.createObjectURL(content);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${(new Date()).toLocaleDateString()}_notes.md`;
        link.click();
        URL.revokeObjectURL(url);
    }

    return (
        <>
            <Navbar onCopy={copyToClipboard} onDownloadPdf={downloadPDF} onDownloadMd={downloadMarkdown}></Navbar>
            <main ref={box} style={{ padding: "2rem" }} className="max-w-[850px] bg-[#252525] mx-auto">
                <Editor
                    markdown={init_markdown}
                    key={"editor_supremo_super_genial >:3"}
                    autoFocus
                    ref={editor}
                    contentEditableClassName="outline-none max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
                ></Editor>
            </main>
        </>

    )

}