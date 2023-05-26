import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  buttonText: string;
  buttonColor: string;
}

function Button({ href, onClick, buttonText, buttonColor } : ButtonProps) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`button button__${buttonColor}`}
        >
          {buttonText}
        </Link>
      ) : (
        <button onClick={onClick} className={`button button__${buttonColor}`}>
          {buttonText}
        </button>
      )}
    </>
  );
}

export default Button;
