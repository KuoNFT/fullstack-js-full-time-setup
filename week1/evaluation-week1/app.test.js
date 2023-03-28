const { objectsToStrings } = require('./app')

it('Test - Array of objects => Array of strings', () => {
    const list = [
        { firstName: 'Tim', lastName: 'Doe' },
        { firstName: 'Angela', lastName: 'Awesome' },
        { firstName: '', lastName: 'Doe' },
        { firstName: 'Mike', lastName: 'Awesome' },
        { firstName: '', lastName: 'Doe' },
        { firstName: 'John', lastName: '' }
    ]
    const list2 = [
        { firstName: '', lastName: 'Doe' },
        { firstName: 'Tim', lastName: 'Awesome' },
        { firstName: '', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Awesome' },
        { firstName: '', lastName: 'Doe' },
        { firstName: 'Angela', lastName: '' }
    ]
    expect(objectsToStrings(list)).toEqual(['Tim', 'Angela', 'Mike', 'John'])
    expect(objectsToStrings(list2)).toEqual(['Tim', 'Jane', 'Angela'])
})