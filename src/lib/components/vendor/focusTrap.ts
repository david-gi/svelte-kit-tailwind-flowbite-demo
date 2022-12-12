//
// Taken from github.com/carbon-design-system/carbon/packages/react/src/internal/keyboard/navigation.js
//

// add all the elements inside modal which you want to make focusable
const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

interface Destructable {
    destroy(): void;
}

export default function focusTrap(node: Element): Destructable {
    const tabbable = Array.from(node.querySelectorAll(selectorTabbable));

    function handleFocusTrap(e: KeyboardEvent): void {
        const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        let index = tabbable.indexOf(document.activeElement as Element);
        if (index === -1 && e.shiftKey) index = 0;
        index += tabbable.length + (e.shiftKey ? -1 : 1);
        index %= tabbable.length;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        (tabbable[index] as HTMLElement).focus();

        e.preventDefault();
    }

    document.addEventListener('keydown', handleFocusTrap, true);

    return {
        destroy(): void {
            document.removeEventListener('keydown', handleFocusTrap, true);
        }
    };
}
