
import { StyleSheet, Text, View } from 'react-native'
import React, { SetStateAction } from 'react'
import { Button, Icon } from '@rneui/themed';



type Props = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
    totalPages: number;
}


const Pagination = (props: Props) => {
    return (
        <View style={{
            backgroundColor: 'gray50',
            bottom: 4,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            flexDirection: 'row',
            columnGap: 40
        }}>
            <Button
                icon={<Icon name="left" type='antdesign' disabled={props.page == 1} color={(props.page == 1) ? 'grey' : ''} disabledStyle={{
                    backgroundColor: '#ffffff00',
                }} />}
                type='clear'
                onPress={() => {
                    props.setPage(prev => Math.max(prev - 1, 1));
                }}
            />

            {(props.page - 2 > 0) && <Text>{props.page - 2}</Text>}
            {(props.page - 1 > 0) && <Text>{props.page - 1}</Text>}

            <Text style={{
                fontWeight: '800',
                fontSize: 20
            }} >{props.page}</Text>

            {(props.page + 1 < props.totalPages) && <Text>{props.page + 1}</Text>}

            <Button
                icon={<Icon name="right" type='antdesign' />}
                type='clear'
                disabled={props.page == props.totalPages}
                onPress={() => {
                    props.setPage(prev => prev + 1)
                }}
            />
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({})