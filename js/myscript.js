$(document).ready(function(){
	$(".calc-form").validate({
        onfocusout: true,
        onsubmit: false,
		rules : {
			average-yield:{
                required: true,
                digits: true,
                range:[0,10000000000]
            },
			cost:{
                required: true,
                digits: true,
                range:[0,10000000000]
            },
			sown-area:{
                required: true,
                digits: true,
                range:[0,10000000000]
            },
        },

        messages:{

            average-yield:{
                required: "Это поле обязательно для заполнения",
                digits: "Ввод только чисел",
                cost: "Только числа",
            },

            cost:{
                required: "Это поле обязательно для заполнения",
                digits: "Ввод только чисел",
                cost: "Только числа",
            },

            range:{
                required: "Это поле обязательно для заполнения",
                digits: "Ввод только чисел",
                cost: "Только числа",
            },

        }
	});
});