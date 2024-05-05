// Editor.tsx
import YooptaEditor, { createYooptaEditor } from '@yoopta/editor';
import ActionMenuList from '@yoopta/action-menu-list';

import { ActionNotionMenuExample } from './NotionActionMenuRender'
import { useMemo } from 'react';
import Paragraph from '@yoopta/paragraph';

const TOOLS = {
    ActionMenu: {
        // This is what we need for custom rendering. You need care only about UI!
        // Main logic is implemented inside ActionMenuList tool
        render: ActionNotionMenuExample,
        tool: ActionMenuList,
    },
    // ...other tools
};

const plugins = [
    Paragraph,
];

function WithNotionExample() {
    const editor = useMemo(() => createYooptaEditor(), []);

    const postEditorValue = () => {
        console.log(editor.getEditorValue());
    }

    return (
        <div>
            <YooptaEditor
                editor={editor}
                tools={TOOLS} plugins={plugins}
            />
            <button onClick={postEditorValue}>Post value</button>
        </div>
    );
}

export default WithNotionExample;

