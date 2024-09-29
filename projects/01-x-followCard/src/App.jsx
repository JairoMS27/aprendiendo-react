import "./App.css";
import { XFollowCard } from "./XFollowCard";

const users = [
  {
    userName: 'JairoMS27',
    name: 'Ejemplo',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: true
  },
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing}) => (
            <XFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </XFollowCard>
          )
        )
      }
    </section>
  );
}
