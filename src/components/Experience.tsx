import { stackComponents } from "@/components/stacksComponents";
import { StackName } from "@/app/lib/utils";

export default function Experience({
  vacancy,
  description,
  stacks,
  startDate,
  endDate,
}: {
  vacancy?: string;
  description?: string;
  stacks: StackName[];
  startDate: string;
  endDate: string;
}) {
  return (
    <div key={`experience-${vacancy}`} className="flex gap-5 flex-wrap py-5">
      <div className="rounded-full bg-[#f1da8b] w-20 h-20 flex flex-col items-center justify-center text-black">
        <p>{endDate}</p>
        <p>-</p>
        <p>{startDate}</p>
      </div>
      <div>
        <p className="text-xl">{vacancy}</p>
        <p className="text-ms font-medium">{description}</p>
        <div className="flex gap-2 items-center">
          <p className="text-ms font-light">Stack:</p>
          {stackComponents.map((component) =>
            stacks.map((stack) =>
              stack == component.name ? component.component : ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
