import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarProps } from "react-native-calendars";

 
const INITIAL_DATE = Date.now()

const ListingCalendar = () => {
    const friendsArray = {
            "2023-02-08": { startingDay: true, selected: true, disableTouchEvent: true, color: 'orange' },
            "2023-02-17": { selected: true, disableTouchEvent: true, color: '#FFD580' },
            "2023-02-18": { selected: true, disableTouchEvent: true, color: '#FFD580' },
            "2023-02-19": { endingDay: true, selected: true, disableTouchEvent: true, color: 'orange' }
        };
    
    const [start, setStart] = useState(INITIAL_DATE);
    const [end, setEnd] = useState(INITIAL_DATE);
    const [dates, setDates] = useState({...friendsArray});

    //console.log(start)

    const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
        setStart(day.dateString);
    }, []);

    const onDayLongPress: CalendarProps['onDayLongPress'] = useCallback(day => {
        setEnd(day.dateString);
    }, []);

    var date = []
    var m: { [x: string]: { selected: boolean; disableTouchEvent: boolean; color: string; }; }[] = []

    if( start < end ){
        var startDate = new Date(start)
        var endDate = new Date(end)

        var n = endDate.getDate() - startDate.getDate();

        for (let i = 1; i < n; i++) {
            date.push( startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + (startDate.getDate() + i) );
        }

        date.forEach(e => {
            let t = {[e]: { selected: true, disableTouchEvent: true, color: 'orange' }}
            m.push(t)
        });

        // setDates(dates => ({
        //     ...dates,
        //     ...[m.join(',')]
        // }));

    }

    const marked = useMemo(() => {
        return {
            [start]: {
                selected: true,
                disableTouchEvent: true,
                color: 'orange',
                textColor: 'white',
                startingDay: true
            },
            [end]: {
                selected: true,
                disableTouchEvent: true,
                color: 'orange',
                textColor: 'white',
                endingDay: true
            },
            ...dates,
        };
    }, [start, end, dates]);

    

    return (
        <View style={styles.container}>
            <Calendar
                minDate={new Date().toISOString()}
                markingType={'period'}
                markedDates={ marked }
                onDayPress={ onDayPress }
                onDayLongPress={ onDayLongPress }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
});


export default ListingCalendar