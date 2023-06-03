import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: any;
  checkout?: boolean;
  buttonText: string;
  buttonColor: string;
}

function Button({ href, onClick, checkout, buttonText, buttonColor }: ButtonProps) {
  return (
    <>
      {href ? (
        <Link href={href} className={`button button__${buttonColor}`}>
          {buttonText}
        </Link>
      ) : (
        <>
          {checkout ? (
            <button
              form="checkout-form"
              type="submit"
              onClick={onClick}
              className={`button button__${buttonColor}`}
            >
              {buttonText}
            </button>
          ) : (
            <button
              onClick={onClick}
              className={`button button__${buttonColor}`}
            >
              {buttonText}
            </button>
          )}
        </>
      )}
    </>
  );
}

export default Button;
