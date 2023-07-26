import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

interface FormEditUserProps {
  name: string;
  position: string;
  description: string;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setDesc: (desc: string) => void;
  handleReset?: () => void;
  handleSubmit?: () => void;
}

const FormEditUser:React.FC<FormEditUserProps> = ({name, position, description, setName, setDesc, setPosition, handleReset, handleSubmit})  => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name"
          />
        </div>
        <TextInput
          id="name"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="position"
            value="Position"
          />
        </div>
        <TextInput
          id="position"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Your position"
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Description"
          />
        </div>
        <TextInput
          id="description"
          required
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Describe your self"
          type="text"
        />
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default FormEditUser;