console.log('It worked!');

function sayItWorked(event){

	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input');

	var value1 = $inputs.first().val();
	var value2 = $inputs.eq(1).val();

	console.log('Submitted with ', value1, ' and ', value2);

	return false;
}

$('#submit-button').on('click', sayItWorked)