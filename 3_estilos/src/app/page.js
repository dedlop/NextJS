import Button from './components/Button'
import Container from './components/Container';
import CustomButton from './components/CustomButton';
import MyComponent from './components/MyComponent';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* 1 - CSS Global */}
      <h1>Meu título</h1>
      {/* 2 - CSS Modules */}
      <h2 className={styles.heading_module}>Meu CSS Modules</h2>
      <div className={styles.container}>
        <p>Testando CSS modules</p>
      </div>
      <div className={styles.container}>
        <h3>Teste</h3>
      </div>
      {/* 3 - Tailwind */}
      <MyComponent />
      {/* 4 - SASS */}
      <Container />
      {/* 5 - SASS com CSS Modules */}
      <Button />
      {/* 6 - Styled components */}
      <CustomButton>Clique aqui!</CustomButton>
    </main>

  );
}
