import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    MDXEditor,
    type MDXEditorProps,
    jsxPlugin,
} from '@mdxeditor/editor'

export default function Editor(props: MDXEditorProps) {
    return (
        <MDXEditor
            plugins={[
                headingsPlugin({
                    allowedHeadingLevels: [1, 2, 3]
                }),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                jsxPlugin()
            ]}
            {...props}
        />
    )
}