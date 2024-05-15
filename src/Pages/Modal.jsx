

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <h2 className="text-xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
            <p className="flex-1 dark:text-gray-600">Aenean sed adipiscing diam donec adipiscing tristique risus. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
                <a href="#" rel="noopener noreferrer" className="font-semibold dark:text-violet-600">Learn more</a>
            </p>
            <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
                <button onClick={onClose} className="px-6 py-2 rounded-sm">Cancel</button>
                <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-600 dark:text-gray-50">Agree</button>
            </div>
        </div>
    );
};

export default Modal;