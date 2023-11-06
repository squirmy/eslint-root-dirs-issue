{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs @ {self, ...}:
    inputs.flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["aarch64-darwin" "x86_64-darwin"];

      perSystem = {pkgs, ...}: {
        devShells = {
          default = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              nodejs_20
              nodejs_20.pkgs.pnpm
            ];
          };
        };
      };
    };
}
