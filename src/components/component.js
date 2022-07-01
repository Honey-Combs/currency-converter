export class Component {
    componentName;
    componentFrame;

    #waitForComponentToBeMounted() {
        let timer = setInterval(() => {
            if (document.querySelector('.' + this.componentName)) {
                clearInterval(timer);
                this.performActionsWhenComponentIsMounted();
            }
        }, 1);
    }

    performActionsWhenComponentIsMounted() {}

    render() {
        this.#waitForComponentToBeMounted();
        return this.componentFrame;
    }
}