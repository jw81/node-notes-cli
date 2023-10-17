import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insertDB: jest.fn(),
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
})

describe('cli app', () => {
  describe('newNote command', () => {
    test('inserts data and returns it', async () => {
      const note = {
        content: 'this is my note',
        tags: ['hello']
      }
    
      insertDB.mockResolvedValue(note)
    
      const result = await newNote(note.content, note.tags)
      expect(result.content).toEqual(note.content)
      expect(result.tags).toEqual(note.tags)
    })
  })

  describe('getAllNotes command', () => {
    test('retrieves all notes and returns them', async () => {
      const allNotes = {
        notes: [
          {
            id: 1,
            content: 'this is note 1',
            tags: ['blah']
          },
          {
            id: 2,
            content: 'this is note 2',
            tags: ['bleep']
          },
          {
            id: 3,
            content: 'this is note 3',
            tags: ['bloop']
          }
        ]
      }
    
      getDB.mockResolvedValue(allNotes)
    
      const result = await getAllNotes()
      expect(result).toEqual(allNotes.notes)
    })
  })

  describe('removeNote command', () => {
    test('removes the appropriate note when it exists', async () => {
      const allNotes = {
        notes: [
          {
            id: 1,
            content: 'this is note 1',
            tags: ['blah']
          },
          {
            id: 2,
            content: 'this is note 2',
            tags: ['bleep']
          },
          {
            id: 3,
            content: 'this is note 3',
            tags: ['bloop']
          }
        ]
      }
    
      const idToRemove = 2
    
      getDB.mockResolvedValue(allNotes)
      saveDB.mockResolvedValue()
    
      const result = await removeNote(idToRemove)
      expect(result).toEqual(idToRemove)
    })
  })

  describe('removeNote command', () => {
    test('returns undefined when a note with the given id does not exist', async () => {
      const allNotes = {
        notes: [
          {
            id: 1,
            content: 'this is note 1',
            tags: ['blah']
          },
          {
            id: 2,
            content: 'this is note 2',
            tags: ['bleep']
          },
          {
            id: 3,
            content: 'this is note 3',
            tags: ['bloop']
          }
        ]
      }
    
      const idToRemove = 4
    
      getDB.mockResolvedValue(allNotes)
      saveDB.mockResolvedValue()
    
      const result = await removeNote(idToRemove)
      expect(result).toBeUndefined()
    })
  })
})

