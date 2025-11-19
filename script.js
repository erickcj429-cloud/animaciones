const skullGrid = [


"000000000000000000000000",
"000000000000000000000000",
"000000000000000000000000",
"000000000011111000000000",
"000000001100000110000000",
"000000010000000001000000",
"000000100000000000100000",
"000000100000000000100000",
"000001001100000110010000",
"000001011110001111010000",
"000001011110101111010000",
"000001001100100110010000",
"000000100001110000100000",
"000000100000000000100000",
"000000010000000001000000",
"000000001101010110000000",
"000000000101010100000000",
"000000000111111100000000",
"000000000000000000000000"

];

const board = document.getElementById("board");
const song = document.getElementById("song");

// Crear el tablero vacío
skullGrid.forEach(row => {
    row.split("").forEach(pixel => {
        const div = document.createElement("div");
        div.classList.add("cell");
        board.appendChild(div);
    });
});

// Animación cuadro por cuadro
function startAnimation() {
    song.play();

    const cells = document.querySelectorAll(".cell");
    let index = 0;

    function draw() {
        if (index >= cells.length) return;

        const row = Math.floor(index / 24);
        const col = index % 24;

        if (skullGrid[row][col] === "1") {
            cells[index].classList.add("on");
        }

        index++;
        setTimeout(draw, 40); // velocidad de creación (ms)
    }

    draw();
}