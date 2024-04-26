import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DosagePeriodInterval = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Dialy</SelectItem>
        <SelectItem value="weekly">Weekly</SelectItem>
        <SelectItem value="montly">Montly</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DosagePeriodInterval;
