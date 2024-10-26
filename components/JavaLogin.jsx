import Image from "next/image";

const JavaLogin = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          LOGIN PAGE
        </h1>
        <h5 className="text-red-500 font-inter">Authentication Process:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The application securely hashes and verifies passwords using the
          BCrypt library. - The isValidLogin method checks if the provided
          username and password match the stored credentials in the database,
          with passwords being securely hashed before comparison.
        </p>
        <h5 className="text-red-500 font-inter">User Interface:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The user interface is built using Java Swing components. - It
          includes fields for entering a username and password, a login button,
          with placeholder text provided for both fields. - The login button can
          be triggered using the "Enter" key. - The UI also includes styling and
          interactivity, such as changing the button color on hover.
        </p>
        <h5 className="text-red-500 font-inter">Database Interaction:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The application connects to a MySQL database to retrieve user data.
          - Database connection parameters, including the JDBC URL, username,
          and password, are provided in the code. - The getUserDataFromDatabase
          method fetches user data (hashed password and salt) from the database
          based on the entered username.
        </p>
        <h5 className="text-red-500 font-inter">Security:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - The application adheres to security best practices by hashing
          passwords and using salt. - It employs BCrypt for password hashing, a
          recommended method for secure password storage.
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-center sm:pl-10 p-10">
        <Image
          src={"/assets/java-project/login.png"}
          alt="java"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default JavaLogin;
