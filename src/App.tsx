import Editor from "./components/Editor"
import { init_markdown } from "./config"
import ChangeThemeButton from "./components/ChangeThemeButton"

export default function App() {

    return (
        <>
            <ChangeThemeButton />
            <main className="px-10 markdown-body">
                <Editor
                    markdown={init_markdown}
                    placeholder="Escriba aquí..."
                    autoFocus
                    contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
                ></Editor>
            </main>
        </>

    )

}