import { Day, DayStatus } from './day.model';

export class Challenge { //unit 152
    constructor(
        public title: string, 
        public description: string, 
        public year: number, 
        public month: number, 
        private _days: Day[] = []
    ) {
        if(_days.length > 0) {
            return;
        }

        // this.currentYear = new Date().getFullYear();
        // this.currentMonth = new Date().getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); //0 gives the last day of the previous month 

        for (let i = 1; i < daysInMonth + 1; i++) { //max daysInMonth will be 31 from const daysInMonth
        const date = new Date(year, month, i);
        const dayInWeek = date.getDay(); //gives sun=0 mon=1 tue=2...
        this._days.push({ dayInMonth: i, dayInWeek: dayInWeek, date: date, status: DayStatus.Open});
        }
    }

    get currentDay() {
        return this._days.find(d => d.dayInMonth === new Date().getDate());
    }

    get days() {
        return [...this._days];
    }
}