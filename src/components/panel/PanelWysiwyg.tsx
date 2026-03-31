"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";

import { cn } from "@/lib/utils/cn";

import styles from "./PanelWysiwyg.module.sass";

type PanelWysiwygProps = {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export default function PanelWysiwyg({
    value = "<p></p>",
    onChange,
    placeholder = "Введите описание",
    className,
}: PanelWysiwygProps) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: styles.editor,
            },
        },
        onUpdate: ({ editor: nextEditor }) => {
            onChange?.(nextEditor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className={cn(styles.root, className)}>
            <div className={styles.toolbar}>
                <button
                    type="button"
                    className={cn(
                        styles.tool,
                        editor.isActive("bold") && styles.toolActive,
                    )}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    B
                </button>
                <button
                    type="button"
                    className={cn(
                        styles.tool,
                        editor.isActive("italic") && styles.toolActive,
                    )}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    I
                </button>
                <button
                    type="button"
                    className={cn(
                        styles.tool,
                        editor.isActive("bulletList") && styles.toolActive,
                    )}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                >
                    Список
                </button>
                <button
                    type="button"
                    className={cn(
                        styles.tool,
                        editor.isActive("orderedList") && styles.toolActive,
                    )}
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                >
                    1.
                </button>
                <button
                    type="button"
                    className={cn(
                        styles.tool,
                        editor.isActive("blockquote") && styles.toolActive,
                    )}
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                >
                    Цитата
                </button>
                <button
                    type="button"
                    className={styles.tool}
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                >
                    Очистить
                </button>
            </div>

            <EditorContent editor={editor} className={styles.content} />
        </div>
    );
}
