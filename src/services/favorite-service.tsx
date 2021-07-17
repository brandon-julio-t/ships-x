import Ship from '../models/ship';

export default class FavoriteService {
  private static LOCAL_STORAGE_KEY = 'favorites';

  private static instance?: FavoriteService = null;

  public static getInstance(): FavoriteService {
    return this.instance ? this.instance : (this.instance = new FavoriteService());
  }

  public getFavorites(): Ship[] {
    const data = localStorage.getItem(FavoriteService.LOCAL_STORAGE_KEY);
    return (JSON.parse(data) as Ship[]) ?? [];
  }

  public getIsFavorited(ship: Ship): boolean {
    const favorites = this.getFavorites();
    return !!favorites?.some(s => s.id === ship.id);
  }

  public addFavorite(ship: Ship): void {
    const favorites = this.getFavorites();
    const data = JSON.stringify([...favorites, ship]);
    localStorage.setItem(FavoriteService.LOCAL_STORAGE_KEY, data);
  }

  public removeFavorite(ship: Ship): void {
    const favorites = this.getFavorites();
    const data = JSON.stringify(favorites?.filter(s => s.id !== ship.id));
    localStorage.setItem(FavoriteService.LOCAL_STORAGE_KEY, data);
  }
}
