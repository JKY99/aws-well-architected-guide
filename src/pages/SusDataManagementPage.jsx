import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusDataManagementPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 데이터 패턴</h1>

      <p>
        데이터 수명 주기를 최적화하고 불필요한 데이터 저장 및 전송을 줄여
        지속 가능성을 향상시킵니다.
      </p>

      <h2>모범 사례</h2>

      <h3>SUS04-BP01: 필요한 데이터만 저장</h3>
      <p>
        실제로 필요한 데이터만 수집하고 저장하여 스토리지 사용량을 최소화합니다.
        데이터 보존 정책을 수립하고 불필요한 데이터는 정기적으로 삭제합니다.
      </p>

      <h3>SUS04-BP02: 수명 주기 정책으로 데이터 냉각</h3>
      <p>
        자주 액세스하지 않는 데이터를 Amazon S3 Glacier 등 저전력 스토리지 계층으로
        이동시킵니다. S3 수명 주기 정책을 통해 자동화합니다.
      </p>

      <h3>SUS04-BP03: 불필요한 데이터 이동 최소화</h3>
      <p>
        데이터 전송은 에너지를 소비하므로 불필요한 데이터 이동을 줄입니다.
        데이터를 처리하는 곳 근처에 저장하고, 불필요한 복제를 피합니다.
      </p>

      <h3>SUS04-BP04: 압축 및 중복 제거 사용</h3>
      <p>
        데이터 압축과 중복 제거를 통해 저장 및 전송되는 데이터 양을 줄입니다.
        스토리지 효율성 향상은 에너지 소비 감소로 이어집니다.
      </p>

      <h3>SUS04-BP05: 가장 에너지 효율적인 스토리지 계층에 데이터 저장</h3>
      <p>
        액세스 패턴에 맞는 스토리지 계층을 선택합니다.
        자주 액세스하는 데이터는 SSD, 덜 자주 액세스하는 데이터는 HDD 또는 아카이브 스토리지를 사용합니다.
      </p>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>Amazon S3 Intelligent-Tiering — 자동 스토리지 계층 최적화</li>
        <li>Amazon S3 Glacier — 장기 아카이브 스토리지</li>
        <li>AWS DataSync — 효율적인 데이터 전송</li>
      </ul>

      <PageNav />
    </article>
  );
}
