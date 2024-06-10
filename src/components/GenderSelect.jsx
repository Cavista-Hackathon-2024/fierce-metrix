import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GenderSelect = ({ id }) => {
  return (
    <Select>
      <SelectTrigger className="w-full" id={id}>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Male">Male</SelectItem>
        <SelectItem value="female">Female</SelectItem>
        <SelectItem value="None binary">None binary</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default GenderSelect;
