import { ChevronLeftIcon, ChevronRightIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ChromeBar } from '@/components/chrome-bar'
import { cn } from '@/lib/utils'
import { AnatomyContainer, AnatomySection } from './anatomy-container'
import { AnatomyLabel } from './anatomy-label'

const WEEKDAYS = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'] as const
const WEEKS = ['week-1', 'week-2', 'week-3', 'week-4'] as const
const DAYS_BY_WEEK: Record<(typeof WEEKS)[number], readonly string[]> = {
  'week-1': ['d-1', 'd-2', 'd-3', 'd-4', 'd-5', 'd-6', 'd-7'],
  'week-2': ['d-8', 'd-9', 'd-10', 'd-11', 'd-12', 'd-13', 'd-14'],
  'week-3': ['d-15', 'd-16', 'd-17', 'd-18', 'd-19', 'd-20', 'd-21'],
  'week-4': ['d-22', 'd-23', 'd-24', 'd-25', 'd-26', 'd-27', 'd-28'],
}

function DayCell({ selected = false }: { selected?: boolean }) {
  return (
    <div
      className={cn(
        'mx-auto flex size-6 items-center justify-center rounded-md',
        selected && 'bg-foreground/10 ring-1 ring-foreground/20',
      )}
    >
      <div
        className={cn(
          'size-2.5 rounded-xs',
          selected ? 'bg-secondary-foreground/60' : 'bg-muted-foreground/25',
        )}
      />
    </div>
  )
}

function NavButton({ direction }: { direction: 'previous' | 'next' }) {
  const icon = direction === 'previous' ? ChevronLeftIcon : ChevronRightIcon

  return (
    <div className="flex size-5 shrink-0 items-center justify-center">
      <HugeiconsIcon
        icon={icon}
        className="size-3.5 text-muted-foreground"
        strokeWidth={2}
      />
    </div>
  )
}

function CalendarAnatomy() {
  return (
		<AnatomyContainer
			caption="Labeled diagram of calendar parts: Calendar root wrapping Months and Month panels, Nav with previous and next controls, MonthCaption with CaptionLabel, MonthGrid with Weekdays headers, Week rows of Day cells, and DayButton as the interactive date control."
		>
      <AnatomySection>
        <div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-8">
          <AnatomyLabel name="Months" className="absolute top-2.5 left-2.5" />

          <div className="relative mt-4 rounded-md border border-dashed border-primary/20 p-3 pt-8">
            <AnatomyLabel name="Month" className="absolute top-2.5 left-2.5" />

            <div className="relative mt-4 rounded-md border border-dashed border-primary/20 p-3 pt-8">
              <AnatomyLabel
                name="nav"
                className="absolute bottom-10.5 left-2.5"
              />
              <div className="mt-4 flex items-center justify-between gap-3">
                <NavButton direction="previous" />
                <div className="min-w-0 flex-1 p-2">
                  <div className="relative mx-auto w-fit">
                    <AnatomyLabel
                      name="CaptionLabel"
                      className="absolute -top-6 -left-3"
                    />
                    <ChromeBar className="h-2.5 w-14" />
                  </div>
                </div>
                <NavButton direction="next" />
              </div>
            </div>

            <div className="relative mt-4 overflow-visible rounded-md border border-dashed border-primary/20 p-3 pt-8">
              <AnatomyLabel
                name="MonthGrid"
                className="absolute top-2.5 left-2.5"
              />

              <div className="relative mt-4">
                <AnatomyLabel
                  name="Weekdays"
                  className="absolute top-0 left-0 whitespace-nowrap"
                />
                <div className="grid grid-cols-7 gap-1 pt-6">
                  {WEEKDAYS.map((weekday) => (
                    <div
                      key={weekday}
                      className="flex items-center justify-center"
                    >
                      <ChromeBar tone="subtle" className="h-1.5 w-4" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-2 space-y-1">
                {WEEKS.map((week) => {
                  const isAnnotatedWeek = week === 'week-2'

                  return (
                    <div
                      key={week}
                      className={cn('relative', isAnnotatedWeek && 'pt-5 pb-6')}
                    >
                      {/* {isAnnotatedWeek ? (
                        <AnatomyLabel
                          name="Week"
                          className="absolute top-0 left-0 whitespace-nowrap"
                        />
                      ) : null} */}
                      <div className="grid grid-cols-7 gap-1">
                        {DAYS_BY_WEEK[week].map((day) => {
                          const isSelected = day === 'd-10'
                          const isDayLabelCell =
                            isAnnotatedWeek && day === DAYS_BY_WEEK[week][0]
                          return (
                            <div key={day} className="relative">
                              {isDayLabelCell ? (
                                <AnatomyLabel
                                  name="Day"
                                  className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap"
                                />
                              ) : null}
                              <DayCell selected={isSelected} />
                              {isSelected ? (
                                <AnatomyLabel
                                  name="SelectedDay"
                                  className="absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap"
                                />
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </AnatomySection>
    </AnatomyContainer>
  )
}

export { CalendarAnatomy }
