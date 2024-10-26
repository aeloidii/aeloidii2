import Image from "next/image";

const JavaLogin = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          LOGIN PAGE
        </h1>

        <h5 className="text-red-500 font-inter">User Interaction:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The user enters their email address and password into the respective input fields.
        </p>

        <h5 className="text-red-500 font-inter">Visual Feedback:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The background color of the login button may briefly change.
          <br />
          - The image in the center of the screen transitions from a lock icon to an unlock icon.
        </p>

        <h5 className="text-red-500 font-inter">Authentication:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - After a one-second delay (to provide visual feedback), the component attempts to authenticate the user using Firebase authentication.
          <br />
          - It uses the provided email address and password for authentication.
        </p>

        <h5 className="text-red-500 font-inter">Success:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - If authentication is successful, the email address and password input fields are cleared.
          <br />
          - The user is then redirected to the "Home" screen.
        </p>

        <h5 className="text-red-500 font-inter">Error Handling:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - In case of an error during the authentication process, such as an incorrect password or network issues, an alert with the message "Login Failed. Please try again." is displayed to the user to inform them of the failure.
        </p>
      </div>

      <div className="flex flex-col ml-10 gap-5 flex-center sm:pl-10 p-10">
        <Image
          src={"/assets/mobile-project/login-1.png"}
          alt="java"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default JavaLogin;
