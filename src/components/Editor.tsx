import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    type MDXEditorProps,
    jsxPlugin,
} from '@mdxeditor/editor'

export default function Editor(props: MDXEditorProps) {
    return (
        <MDXEditor
            plugins={[
                headingsPlugin({
                    allowedHeadingLevels: [1, 2, 3, 4]
                }),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                jsxPlugin()
            ]}
            {...props}
        />
    )
}