import { TimelineItem } from '@/components/shared/TimelineItem'
import type { MilestoneItem } from '@/types'

interface TimelineItem {
  title: string
  milestones: MilestoneItem[]
}

export function TimelineSection({ timelines }: { timelines: TimelineItem[] }) {
  return (
    <div className="flex flex-col gap-4 pt-16 text-copy md:flex-row">
      {timelines?.map((timeline, key) => {
        const { title, milestones } = timeline
        return (
          <div key={key} className="md:max-w-[50%]">
            <div className="pb-5 text-xl font-bold">{title}</div>

            {milestones?.map((experience, index) => (
              <div key={index}>
                <TimelineItem
                  milestone={experience}
                  isLast={milestones.length - 1 === index}
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
