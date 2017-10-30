$(document).ready(function () {

    $('form').on('submit', function () {

        console.log('Clicked Submit!');

        var item = $('form input');
        var todo = {item: item.val()};
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function () {
        var item = $(this).text().replace(/ /g, "-");
        console.log('Clicked OK');
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});
