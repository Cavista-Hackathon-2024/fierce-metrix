import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DosageTimeInterval = ({ id }) => {
  return (
    <Select>
      <SelectTrigger className="w-full" id={id}>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">hour</SelectItem>
        <SelectItem value="2">2 hours</SelectItem>
        <SelectItem value="3">3 hours</SelectItem>
        <SelectItem value="4">4 hours</SelectItem>
        <SelectItem value="5">5 hours</SelectItem>
        <SelectItem value="6">6 hours</SelectItem>
        <SelectItem value="7">7 hours</SelectItem>
        <SelectItem value="8">8 hours</SelectItem>
        <SelectItem value="9">9 hours</SelectItem>
        <SelectItem value="10">10 hours</SelectItem>
        <SelectItem value="11">11 hours</SelectItem>
        <SelectItem value="12">12 hours</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DosageTimeInterval;
