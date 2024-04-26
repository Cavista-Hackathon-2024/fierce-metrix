import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectOption = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
        <SelectItem value="null">I'd rather not say</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectOption;
