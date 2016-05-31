define(
    'controller',
    [
        'jquery',
        'tmpl',
        'model',
        'view'
    ],
    function () {
        return {
            controller: function (model, view) {
                            var self = this;
                            var ENTER_KEY = 13;
                        	var ESCAPE_KEY = 27;

                            function addItem () {
                                var newItem = view.elements.input.val();
                                model.addItem(newItem);
                                view.renderList(model.data);
                                view.elements.input.val('');
                            }

                            function removeItem () {
                                var item = $(this).attr('data-value');
                                model.removeItem(item);
                                view.renderList(model.data);
                            }

                            view.elements.addBtn.on('click', addItem);
                            view.elements.listContainer.on('click', '.item-delete', removeItem);
                            view.elements.input.on('keydown', function (e) {
                                if (e.which == ENTER_KEY) {
                                        addItem();
                                    }
                            });
                },
            };
        }
);
