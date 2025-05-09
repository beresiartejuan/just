import { forwardRef } from 'react';
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    MDXEditor,
    markdownShortcutPlugin,
    jsxPlugin,
    type MDXEditorProps,
    type MDXEditorMethods,
    imagePlugin,
    linkPlugin,
    linkDialogPlugin,
} from '@mdxeditor/editor';

const Editor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => {
    return (
        <MDXEditor
            plugins={[
                headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                jsxPlugin(),
                imagePlugin(),
                linkPlugin(),
                linkDialogPlugin()
            ]}
            {...props}
            ref={ref}
        />
    );
});

export default Editor;