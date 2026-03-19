import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP04 — 압축 및 중복 제거 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>데이터 압축과 중복 제거로 저장 공간과 전송 대역폭을 최소화합니다. 압축 알고리즘을 사용하면 동일한 정보를 더 적은 비트로 저장하고 전송할 수 있어 스토리지 용량과 네트워크 에너지 소비를 크게 줄일 수 있습니다. 중복 제거는 동일한 데이터를 여러 번 저장하는 것을 방지하여 스토리지 효율성을 높입니다.</p>
      <h2>원하는 결과</h2>
      <p>압축과 중복 제거 기술을 체계적으로 적용하여 스토리지 사용량을 최소화하고, 데이터 전송에 필요한 대역폭과 에너지를 줄입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>압축 없이 원시 로그 데이터를 대량으로 저장합니다.</li>
        <li>동일한 데이터를 여러 버킷이나 위치에 중복으로 저장합니다.</li>
        <li>백업 데이터에 중복 제거나 압축을 적용하지 않습니다.</li>
        <li>데이터베이스에서 압축 기능을 활성화하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 용량이 감소하여 물리적 스토리지 인프라와 에너지가 절약됩니다.</li>
        <li>데이터 전송량이 줄어들어 네트워크 에너지 소비가 감소합니다.</li>
        <li>스토리지 비용이 직접적으로 절감됩니다.</li>
        <li>백업 및 복구 시간이 단축됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon S3에 저장하는 객체에 gzip, Zstandard 등의 압축을 적용합니다.</li>
        <li>Amazon Redshift, Amazon RDS의 내장 압축 기능을 활성화합니다.</li>
        <li>Apache Parquet, ORC 등 컬럼 형식으로 분석 데이터를 저장하여 압축 효율을 높입니다.</li>
        <li>AWS Backup에서 중복 제거 옵션을 활성화합니다.</li>
        <li>로그 데이터는 CloudWatch Logs Insights로 분석하고 원본 로그는 압축하여 S3에 아카이브합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 — 객체 수준 압축 및 스토리지 최적화</li>
        <li>Amazon Redshift — 컬럼 압축 및 데이터 인코딩</li>
        <li>Amazon RDS — 데이터베이스 수준 압축</li>
        <li>AWS Backup — 중복 제거 기능 지원 백업 서비스</li>
        <li>Amazon Kinesis Data Firehose — 스트리밍 데이터 압축 후 저장</li>
      </ul>
      <PageNav />
    </article>
  );
}
