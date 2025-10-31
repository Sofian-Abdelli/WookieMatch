import "./buttons.css";

function Buttons({ icon, onClick, className }) {
  if (icon === "heart") {
    return (
      <svg
        className={className}
        onClick={onClick}
        width="200"
        height="200"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="m12.012 5.572l-1.087-1.087a5.5 5.5 0 1 0-7.778 7.778l8.839 8.839l.002-.002l.026.026l8.839-8.839a5.5 5.5 0 1 0-7.778-7.778l-1.063 1.063Zm-.024 12.7l4.936-4.937l1.45-1.4h.002l1.063-1.062a3.5 3.5 0 1 0-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 1 0-4.95 4.95l2.54 2.54l.001-.003l4.886 4.886Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
  if (icon === "cross") {
    return (
      <svg
        className={className}
        onClick={onClick}
        width="200"
        height="200"
        viewBox="0 0 24 24"
      >
        <path d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z" />
      </svg>
    );
  }
}
export default Buttons;
