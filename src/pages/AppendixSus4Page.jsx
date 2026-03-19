import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Page() {
  return (
    <article className="doc-content">
      <h1>SUS 4 — 데이터를 어떻게 관리합니까?</h1>

      <p>
        데이터 수명 주기를 최적화하고 불필요한 데이터 저장 및 전송을 줄여
        스토리지 에너지 소비를 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SUS04-BP01:</strong> 필요한 데이터만 저장<br />
          <span>실제 필요한 데이터만 수집, 저장하여 스토리지 사용량을 최소화합니다. 불필요한 데이터를 정기 삭제합니다.</span>
        </li>
        <li>
          <strong>SUS04-BP02:</strong> 수명 주기 정책으로 데이터 냉각<br />
          <span>S3 수명 주기 정책으로 오래된 데이터를 S3 Glacier 등 저전력 스토리지로 자동 이동합니다.</span>
        </li>
        <li>
          <strong>SUS04-BP03:</strong> 불필요한 데이터 이동 최소화<br />
          <span>데이터를 처리 위치 가까이 저장하고 불필요한 복제, 전송을 줄여 에너지 소비를 낮춥니다.</span>
        </li>
        <li>
          <strong>SUS04-BP04:</strong> 압축 및 중복 제거 사용<br />
          <span>데이터 압축과 중복 제거로 저장 데이터 양을 줄이고 스토리지 에너지 효율을 높입니다.</span>
        </li>
        <li>
          <strong>SUS04-BP05:</strong> 가장 에너지 효율적인 스토리지 계층에 데이터 저장<br />
          <span>액세스 빈도에 맞는 스토리지 계층을 사용하여 에너지 효율을 최대화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
