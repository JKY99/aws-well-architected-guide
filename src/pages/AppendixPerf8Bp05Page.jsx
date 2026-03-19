import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF08-BP05 — 파티셔닝을 통한 성능 향상</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터와 처리를 파티셔닝하여 병렬 처리를 활용하고, 단일 리소스의 처리량 한계를 극복합니다.</p>
      <h2>원하는 결과</h2>
      <p>파티셔닝과 병렬 처리로 선형적인 성능 확장을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 파티션에 모든 데이터 저장</li>
        <li>핫 파티션 문제 무시</li>
        <li>파티션 키 설계 부실</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>처리량 선형 확장</li>
        <li>핫스팟 방지</li>
        <li>병렬 처리 활용</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>DynamoDB 파티션 키 설계 최적화</li>
        <li>SQS 파티셔닝으로 병렬 처리</li>
        <li>Kinesis 샤드로 스트림 파티셔닝</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon DynamoDB (파티션 키 설계)</li>
        <li>Amazon Kinesis</li>
        <li>Amazon SQS</li>
        <li>Amazon S3 (멀티파트 업로드)</li>
      </ul>
      <PageNav />
    </article>
  );
}
