export interface Perfil {
    nombre: string;
    biografia: string;
    habilidades: string[];
    correo: string;
}

export interface Proyecto {
    id: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    imagen: string;
    textoAlternativo: string;
    urlRepositorio: string;
}

export interface ProyectoCardProps {
    proyecto: Proyecto;
}

export interface HeaderProps {
    nombre: string;
}

export interface AboutPageProps {
    perfil: Perfil;
}

export interface FooterProps {
    nombre: string;
}

export interface ContactProps {
    correo: string;
}

export interface ContactFormValues {
    nombre: string;
    correo: string;
    mensaje: string;
}

export type ContactFormErrors = Partial<
    Record<keyof ContactFormValues, string>
>;

export interface NavigationItem {
    ruta: string;
    texto: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface GitHubReposState {
  data: GitHubRepo[] | null;
  loading: boolean;
  error: string | null;
}

export interface RepositoryCardProps {
  repositorio: GitHubRepo;
}