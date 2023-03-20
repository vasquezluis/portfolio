/**
 * * works interface <contract>
 */

export interface Works {
  title: string;
  description: string;
  image: string;
  link_1: { url: string; icon: string };
  link_2: { url: string; icon: string };
  tech_1: { name: string; icon: string };
  tech_2: { name: string; icon: string };
  tech_3: { name: string; icon: string };
  type: string;
  active: boolean;
}
