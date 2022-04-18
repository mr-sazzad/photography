import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="w-3/5 mx-auto border-2 border-cyan-800 mt-10 rounded-md">
        <h2 className="text-2xl font-mono text-cyan-700 mt-10 mb-5 border-b-2">
          Difference Between Authorization and Authentication
        </h2>
        <h3 className="text-xl text-cyan-800 font-mono">
          Authentication works for
        </h3>
        <p className="font-mono">
          1. In authentication process, the identity of users are checked for
          providing the access to the system.
        </p>
        <p className="font-mono text-left pl-2">
          2. In authentication process, users or persons are verified.
        </p>
        <h3 className="text-xl text-cyan-800 font-mono">
          Authorization works for
        </h3>
        <p className="font-mono text-left pl-2">
          {" "}
          1. While in authorization process, person’s or user’s authorities are
          checked for accessing the resources.
        </p>
        <p className="font-mono mb-5 text-left pl-1">
          {" "}
          2. While in this process, users or persons are validated.
        </p>
      </div>
      <div className="w-3/5 mx-auto border-2 border-cyan-800 mt-10 rounded-md">
        <h2 className="text-2xl font-mono text-cyan-700 mt-10 mb-5 border-b-2">
          Why we use firebase ? what other options so we have to implement
          authentication
        </h2>
        <h3 className="text-xl text-cyan-800 font-mono">
          Why we use firebase ?
        </h3>
        <p className="font-mono text-left pl-2">
          we use firebase for use pre build authentication system easily and we
          are also not perfect for create authentication system we will learn
          inshaAllah soon ok done.
        </p>
        <h3 className="text-xl text-cyan-800 font-mono">
          what other options so we have to implement authentication?
        </h3>
        <p className="font-mono text-left pl-10 mb-5">
          1. flutter <br />
          2. Okta <br /> 3. MongoDB <br /> 4. Auth0 <br />
          5. passport
        </p>
      </div>
      <div className="w-3/5 mx-auto border-2 border-cyan-800 mt-10 rounded-md">
        <h2 className="text-2xl font-mono text-cyan-700 mt-10 mb-5 border-b-2">
          What other service dose firebase provide other then authentication
        </h2>
        <h3 className="text-xl text-cyan-800 font-mono">other services</h3>
        <p className="font-mono text-left pl-2 mb-5"> It is compatible with Web, iOS,
          Android, and OS X clients. There are many services which Firebase
          provides without authentication , Most useful of them are:Cloud Firestore. Cloud
          Functions.Hosting. Cloud Storage. Google Analytics.
          Predictions. Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
