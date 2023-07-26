import { Alert } from 'flowbite-react';

export default function DefaultAlert() {
  return (
    <Alert color="success">
      <span>
        <p>
          <span className="font-medium">
          Success change User Information!
          </span>
        </p>
      </span>
    </Alert>
  )
}