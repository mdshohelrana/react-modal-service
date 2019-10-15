class ConfirmService {
    initialOptions = {
        component: '.../confirm',
        appendElement: 'body',
        modalOptions: {
            backdrop: 'static',
            keyboard: false
        },
        title: 'Confirmation',
        message: 'Are you sure?',
        draggable: false,
        data: {}
    };

    constructor() {
        this.options = {...this.initialOptions};
    }

    show = (options) => {
        options = Object.assign(this.options, options);
    }
}

export default ConfirmService;