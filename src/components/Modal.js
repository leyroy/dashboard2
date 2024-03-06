export const Modal = ({ setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen(false)}
			className="absolute z-30 inset-0 bg-darkgray opacity-50 md:hidden cursor-pointer "
		></div>
	);
};
