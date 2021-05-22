import fs from 'fs';
import path from 'path';

const FIXTURE_DIR = path.join(__dirname, 'fixtures');

const readUserMock = (): Promise<UserType> => {
  const userMockPath = path.join(FIXTURE_DIR, 'user.mock.json')
  return new Promise((resolve, reject) => {
    fs.readFile(userMockPath, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        const obj = JSON.parse(data)
        resolve(obj.user as UserType)
      }
    })
  })
}

async function main() {
  const user = await readUserMock()
  console.log(`username: ${user.username}\nbirthday: ${user.birthday}`)
}

async function run() {
  try {
    await main()
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()

