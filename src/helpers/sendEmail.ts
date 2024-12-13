import { init, send } from '@emailjs/browser';

export const sendEmail = (message: {}) => {
	init({ publicKey: '_hm22IqZ9qAQZM1XS' });
	send('service_h334iaa', 'template_0sdlf1e', message).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.error(error);
		}
	);
};
