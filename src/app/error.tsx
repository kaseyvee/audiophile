"use client";

import Button from "@/components/subcomponents/Button";

export default function Error() {
  return (
    <main className="error page">
      <div className="top">
        <div className="wrapper">
          <h1 className="feature-header">Ack! We couldn&apos;t find that :(</h1>
          <Button
            href="/"
            buttonColor="orange"
            buttonText="BACK TO HOME"
          />
        </div>
      </div>
    </main>
  );
}